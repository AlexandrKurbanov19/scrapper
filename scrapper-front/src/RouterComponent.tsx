import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import 'moment/locale/ru';
import useStore from 'domain/modelLayer/store/useStore';

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

import LoginPage from './pages/Auth/LoginPage';
import ForgetPasswordPage from './pages/Auth/ForgetPasswordPage';
import LogoutPage from './pages/Auth/LogoutPage';
import ResetPasswordPage from './pages/Auth/ResetPasswordPage';

import LayoutContextProvider from './components/layout/LayoutContextProvider';
import AboutPage from './pages/AboutPage/AboutPage';
import LawsPage from './pages/LawsPage/LawsPage';
import FeedbackPage from './pages/FeedbackPage/FeedbackPage';
import ParserPage from './pages/ParserPage/ParserPage';
import InstructionPage from './pages/InstructionPage/InstructionPage';
import ParsingExamplePage from './pages/ParsingExamplePage/ParsingExamplePage';
import RegistrationPage from './pages/Auth/RegistrationPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

const RouterComponent = () => {
  const { profileStore: { profile } } = useStore();

  const isLogged = !!profile;

  return (
    // TODO: продумать какие роуты будут для ролей
    <Router>
      <LayoutContextProvider>
        <Routes>
          <>
            {!isLogged && (
              <>
                <Route path={ABOUT_PAGE} element={<AboutPage />} />
                <Route path={LAW_PAGE} element={<LawsPage />} />
                <Route path={FEEDBACK_PAGE} element={<FeedbackPage />} />
                <Route path={INSTRUCTION_PAGE} element={<InstructionPage />} />
                <Route path={PARSING_EXAMPLE_PAGE} element={<ParsingExamplePage />} />
                <Route path={PARSER_PAGE} element={<ParserPage />} />
                <Route path={REGISTRATION} element={<RegistrationPage />} />
                <Route path={LOGIN} element={<LoginPage />} />
                <Route path={FORGET_PASSWORD} element={<ForgetPasswordPage />} />
                <Route path={RESET_PASSWORD} element={<ResetPasswordPage />} />
                <Route path="*" element={<Navigate to={ABOUT_PAGE} />} />
              </>
            )}

            {isLogged && (
              <>
                <Route path={LOGOUT} element={<LogoutPage />} />

                {profile.role.name === RoleNamesEnum.Administrator && (
                  <>
                    <Route path={ABOUT_PAGE} element={<Navigate to={USERS} />} />
                    <Route path="*" element={<Navigate to={ABOUT_PAGE} />} />
                  </>
                )}

                {profile.role.name === RoleNamesEnum.Client && (
                  <>
                    <Route path={ABOUT_PAGE} element={<AboutPage />} />
                    <Route path={LAW_PAGE} element={<LawsPage />} />
                    <Route path={FEEDBACK_PAGE} element={<FeedbackPage />} />
                    <Route path={INSTRUCTION_PAGE} element={<InstructionPage />} />
                    <Route path={PARSING_EXAMPLE_PAGE} element={<ParsingExamplePage />} />
                    <Route path={PARSER_PAGE} element={<ParserPage />} />
                    <Route path={REGISTRATION} element={<RegistrationPage />} />
                    <Route path={LOGIN} element={<LoginPage />} />
                    <Route path={FORGET_PASSWORD} element={<ForgetPasswordPage />} />
                    <Route path={RESET_PASSWORD} element={<ResetPasswordPage />} />
                    <Route path="*" element={<Navigate to={ABOUT_PAGE} />} />
                    <Route path={PROFILE} element={<ProfilePage />} />
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
