import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import 'moment/locale/ru';
import useStore from 'domain/modelLayer/store/useStore';

import { Spin } from 'antd';
import {
  FORGET_PASSWORD,
  LOGIN,
  LOGOUT,
  RESET_PASSWORD,
  USERS,
  ABOUT_PAGE,
  LAW_PAGE,
  FEEDBACK_PAGE,
  PARSER_PAGE,
  INSTRUCTION_PAGE,
  PARSING_EXAMPLE_PAGE,
  REGISTRATION, PROFILE,
} from './routes';
import { RoleNamesEnum } from './domain/types';
import LayoutContextProvider from './components/layout/LayoutContextProvider';

const LoginPage = React.lazy(() => import('./pages/Auth/LoginPage'));
const ForgetPasswordPage = React.lazy(() => import('./pages/Auth/ForgetPasswordPage'));
const LogoutPage = React.lazy(() => import('./pages/Auth/LogoutPage'));
const ResetPasswordPage = React.lazy(() => import('./pages/Auth/ResetPasswordPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage/AboutPage'));
const LawsPage = React.lazy(() => import('./pages/LawsPage/LawsPage'));
const FeedbackPage = React.lazy(() => import('./pages/FeedbackPage/FeedbackPage'));
const ParserPage = React.lazy(() => import('./pages/ParserPage/ParserPage'));
const InstructionPage = React.lazy(() => import('./pages/InstructionPage/InstructionPage'));
const ParsingExamplePage = React.lazy(() => import('./pages/ParsingExamplePage/ParsingExamplePage'));
const RegistrationPage = React.lazy(() => import('./pages/Auth/RegistrationPage'));
const ProfilePage = React.lazy(() => import('./pages/ProfilePage/ProfilePage'));
const fallBack = <div className="absolute top-[50%] left-[50%]"><Spin size="large" tip="Загрузка данных..." /></div>;

const RouterComponent = () => {
  const { profileStore: { profile } } = useStore();

  const isLogged = !!profile;

  return (
    <Router>
      <LayoutContextProvider>
        <Routes>
          <>
            {!isLogged && (
              <>
                <Route
                  path={ABOUT_PAGE}
                  element={(
                    <React.Suspense fallback={fallBack}>
                      <AboutPage />
                    </React.Suspense>
                   )}
                />
                <Route
                  path={LAW_PAGE}
                  element={(
                    <React.Suspense fallback={fallBack}>
                      <LawsPage />
                    </React.Suspense>
                   )}
                />
                <Route
                  path={FEEDBACK_PAGE}
                  element={(
                    <React.Suspense fallback={fallBack}>
                      <FeedbackPage />
                    </React.Suspense>
                   )}
                />
                <Route
                  path={INSTRUCTION_PAGE}
                  element={(
                    <React.Suspense fallback={fallBack}>
                      <InstructionPage />
                    </React.Suspense>
                   )}
                />
                <Route
                  path={PARSING_EXAMPLE_PAGE}
                  element={(
                    <React.Suspense fallback={fallBack}>
                      <ParsingExamplePage />
                    </React.Suspense>
                   )}
                />
                <Route
                  path={PARSER_PAGE}
                  element={(
                    <React.Suspense fallback={fallBack}>
                      <ParserPage />
                    </React.Suspense>
                   )}
                />
                <Route
                  path={REGISTRATION}
                  element={(
                    <React.Suspense fallback={fallBack}>
                      <RegistrationPage />
                    </React.Suspense>
                  )}
                />
                <Route
                  path={LOGIN}
                  element={(
                    <React.Suspense fallback={fallBack}>
                      <LoginPage />
                    </React.Suspense>
                  )}
                />
                <Route
                  path={FORGET_PASSWORD}
                  element={(
                    <React.Suspense fallback={fallBack}>
                      <ForgetPasswordPage />
                    </React.Suspense>
                  )}
                />
                <Route
                  path={RESET_PASSWORD}
                  element={(
                    <React.Suspense fallback={fallBack}>
                      <ResetPasswordPage />
                    </React.Suspense>
                  )}
                />

                <Route path="*" element={<Navigate to={ABOUT_PAGE} />} />
              </>
            )}

            {isLogged && (
              <>
                <Route
                  path={LOGOUT}
                  element={(
                    <React.Suspense fallback={fallBack}>
                      <LogoutPage />
                    </React.Suspense>
                  )}
                />
                {profile.role.name === RoleNamesEnum.Administrator && (
                  <>
                    <Route path={ABOUT_PAGE} element={<Navigate to={USERS} />} />
                    <Route path="*" element={<Navigate to={ABOUT_PAGE} />} />
                  </>
                )}

                {profile.role.name === RoleNamesEnum.Client && (
                  <>
                    <Route
                      path={ABOUT_PAGE}
                      element={(
                        <React.Suspense fallback={fallBack}>
                          <AboutPage />
                        </React.Suspense>
                      )}
                    />
                    <Route
                      path={LAW_PAGE}
                      element={(
                        <React.Suspense fallback={fallBack}>
                          <LawsPage />
                        </React.Suspense>
                      )}
                    />
                    <Route
                      path={FEEDBACK_PAGE}
                      element={(
                        <React.Suspense fallback={fallBack}>
                          <FeedbackPage />
                        </React.Suspense>
                      )}
                    />
                    <Route
                      path={INSTRUCTION_PAGE}
                      element={(
                        <React.Suspense fallback={fallBack}>
                          <InstructionPage />
                        </React.Suspense>
                      )}
                    />
                    <Route
                      path={PARSING_EXAMPLE_PAGE}
                      element={(
                        <React.Suspense fallback={fallBack}>
                          <ParsingExamplePage />
                        </React.Suspense>
                      )}
                    />
                    <Route
                      path={PARSER_PAGE}
                      element={(
                        <React.Suspense fallback={fallBack}>
                          <ParserPage />
                        </React.Suspense>
                      )}
                    />
                    <Route
                      path={REGISTRATION}
                      element={(
                        <React.Suspense fallback={fallBack}>
                          <RegistrationPage />
                        </React.Suspense>
                      )}
                    />
                    <Route
                      path={LOGIN}
                      element={(
                        <React.Suspense fallback={fallBack}>
                          <LoginPage />
                        </React.Suspense>
                      )}
                    />
                    <Route
                      path={FORGET_PASSWORD}
                      element={(
                        <React.Suspense fallback={fallBack}>
                          <ForgetPasswordPage />
                        </React.Suspense>
                      )}
                    />
                    <Route
                      path={RESET_PASSWORD}
                      element={(
                        <React.Suspense fallback={fallBack}>
                          <ResetPasswordPage />
                        </React.Suspense>
                      )}
                    />
                    <Route
                      path={PROFILE}
                      element={(
                        <React.Suspense fallback={fallBack}>
                          <ProfilePage />
                        </React.Suspense>
                      )}
                    />

                    <Route path="*" element={<Navigate to={ABOUT_PAGE} />} />
                  </>
                )}
              </>
            )}
          </>
        </Routes>
      </LayoutContextProvider>
    </Router>
  );
};
export default observer(RouterComponent);
