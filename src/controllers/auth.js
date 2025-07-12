// import authService from '../services/auth.js';

// const register = async (req, res, next) => {
//   try {
//     const result = await authService.registerUser(req.body);
//     res.status(201).json({
//       status: '201',
//       message: 'Successfully registered a user!',
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// const login = async (req, res, next) => {
//   try {
//     const { accessToken, refreshToken } = await authService.loginUser(req.body);

//     res
//       .cookie('refreshToken', refreshToken, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'strict',
//         maxAge: 30 * 24 * 60 * 60 * 1000,
//       })
//       .status(200)
//       .json({
//         status: '200',
//         message: 'Successfully logged in an user!',
//         data: { accessToken },
//       });
//   } catch (error) {
//     next(error);
//   }
// };

// const refresh = async (req, res, next) => {
//   try {
//     const oldRefreshToken = req.cookies.refreshToken;
//     const { accessToken, refreshToken } = await authService.refreshSession(
//       oldRefreshToken,
//     );

//     res
//       .cookie('refreshToken', refreshToken, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'strict',
//         maxAge: 30 * 24 * 60 * 60 * 1000,
//       })
//       .status(200)
//       .json({
//         status: '200',
//         message: 'Successfully refreshed a session!',
//         data: { accessToken },
//       });
//   } catch (error) {
//     next(error);
//   }
// };

// const logout = async (req, res, next) => {
//   try {
//     const refreshToken = req.cookies.refreshToken;
//     await authService.logoutUser(refreshToken);

//     res.clearCookie('refreshToken');
//     res.sendStatus(204);
//   } catch (error) {
//     next(error);
//   }
// };

// export default {
//   register,
//   login,
//   refresh,
//   logout,
// };
import authService from '../services/auth.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const register = async (req, res) => {
  const result = await authService.registerUser(req.body);
  res.status(201).json({
    status: '201',
    message: 'Successfully registered a user!',
    data: result,
  });
};

const login = async (req, res) => {
  const { accessToken, refreshToken } = await authService.loginUser(req.body);

  res
    .cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    })
    .status(200)
    .json({
      status: '200',
      message: 'Successfully logged in a user!',
      data: { accessToken },
    });
};

const refresh = async (req, res) => {
  const oldRefreshToken = req.cookies.refreshToken;
  const { accessToken, refreshToken } = await authService.refreshSession(
    oldRefreshToken,
  );

  res
    .cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    })
    .status(200)
    .json({
      status: '200',
      message: 'Successfully refreshed a session!',
      data: { accessToken },
    });
};

const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  await authService.logoutUser(refreshToken);

  res.clearCookie('refreshToken');
  res.sendStatus(204);
};

export default {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  refresh: ctrlWrapper(refresh),
  logout: ctrlWrapper(logout),
};
