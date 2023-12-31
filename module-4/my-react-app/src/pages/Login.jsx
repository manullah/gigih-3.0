import { useEffect } from 'react';
import { useSpotifyLogin } from '../domains/spotify/hooks/useSpotifyHook';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { accessToken, doLogin } = useSpotifyLogin()

  useEffect(() => {
    if (accessToken) {
      navigate('/spotify')
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Spotify</h1>  
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <button
              type="button"
              className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              onClick={doLogin}
            >
              <span className="inline-block mr-2">Log in with Spotify</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   {JSON.stringify(accessToken)}
    //   acklsanc
    //   <hr />
    //   {accessToken ? (
    //     <div>
    //       <h1>Welcome to your Spotify Login!</h1>
    //       {/* Your app content here */}
    //     </div>
    //   ) : (
    //     <button onClick={getAuthorizationUrl}>Log in with Spotify</button>
    //   )}
    // </div>
  );
};

export default Login;
