const API_BASE_URL = '/api/v1';
const TOKEN_KEY = 'access_token';

const getToken = () => {
  if (typeof window === 'undefined') {
    return null;
  }

  return window.localStorage.getItem(TOKEN_KEY);
};

const setToken = (token) => {
  if (typeof window !== 'undefined' && token) {
    window.localStorage.setItem(TOKEN_KEY, token);
  }
};

const clearToken = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(TOKEN_KEY);
  }
};

const request = async (path, options = {}) => {
  const token = getToken();
  const headers = new Headers(options.headers);

  if (!headers.has('Content-Type') && options.body) {
    headers.set('Content-Type', 'application/json');
  }

  if (token && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const contentType = response.headers.get('content-type') || '';
  const data = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message = typeof data === 'object' && data?.message
      ? data.message
      : `Request failed with status ${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
};

const post = (path, body) => request(path, {
  method: 'POST',
  body: JSON.stringify(body),
});

export const apiClient = {
  get: (path, options) => request(path, { ...options, method: 'GET' }),
  post,
  put: (path, body) => request(path, {
    method: 'PUT',
    body: JSON.stringify(body),
  }),
  delete: (path, options) => request(path, { ...options, method: 'DELETE' }),
};

export const authClient = {
  loginViaEmailPassword: async (email, password) => {
    const result = await post('/auth/login', { email, password });
    if (result?.access_token) {
      setToken(result.access_token);
    }
    return result;
  },
  loginWithProvider: (provider, redirectTo = '/') => {
    const redirect = encodeURIComponent(redirectTo);
    window.location.href = `${API_BASE_URL}/auth/${provider}?redirect=${redirect}`;
  },
  register: (payload) => post('/auth/register', payload),
  verifyOtp: async (payload) => {
    const result = await post('/auth/verify-otp', payload);
    if (result?.access_token) {
      setToken(result.access_token);
    }
    return result;
  },
  resendOtp: (email) => post('/auth/resend-otp', { email }),
  resetPasswordRequest: (email) => post('/auth/reset-password/request', { email }),
  resetPassword: (payload) => post('/auth/reset-password', payload),
  me: () => apiClient.get('/auth/me'),
  setToken,
  logout: clearToken,
  redirectToLogin: (redirectTo = window.location.href) => {
    const redirect = encodeURIComponent(redirectTo);
    window.location.href = `/login?redirect=${redirect}`;
  },
};
