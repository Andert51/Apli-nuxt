import cookies from 'js-cookie'
export default function ({ route, redirect }) {
  if (route.path === '/') {
    if (cookies.get('token2')) {
      cookies.remove('token2')
    }
  }
  console.log('@Nint => Navigation to ', route.path)
}
