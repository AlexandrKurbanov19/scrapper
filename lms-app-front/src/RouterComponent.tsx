import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import 'moment/locale/ru';
import useStore from 'domain/modelLayer/store/useStore';

import ScrollToTop from './components/ScrollToTop';
import {
  FORGET_PASSWORD,
  INDEX,
  LOGIN,
  LOGOUT,
  RESET_PASSWORD,
  USERS,
  PARENT,
  STUDENT,
  DISCIPLINES,
  MODULES,
  THEMES,
  LESSONS,
  LESSON,
  STUDENT_DASHBOARD, ABOUT_PAGE, LAW_PAGE, FEEDBACK_PAGE, PARSER_PAGE,
} from './routes';
import { RoleNamesEnum } from './domain/types';

import LoginPage from './pages/Auth/LoginPage';
import ForgetPasswordPage from './pages/Auth/ForgetPasswordPage';
import LogoutPage from './pages/Auth/LogoutPage';
import ResetPasswordPage from './pages/Auth/ResetPasswordPage';

import UsersPage from './pages/Admin/UsersPage/UsersPage';
import StudentPage from './pages/Admin/UsersPage/includes/single/StudentPage';
import ParentPage from './pages/Admin/UsersPage/includes/single/ParentPage';
import DisciplinePage from './pages/Admin/Disciplines/DisciplinePage';
import ModulesPage from './pages/Admin/Modules/ModulesPage';
import ThemesPage from './pages/Admin/Themes/ThemesPage';
import LessonsPage from './pages/Admin/Lessons/LessonsPage';
import LessonPage from './pages/Admin/Lessons/LessonPage';

import LayoutContextProvider from './components/layout/LayoutContextProvider';
import AboutPage from "./pages/AboutPage/AboutPage";
import LawsPage from "./pages/LawsPage/LawsPage";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import ParserPage from "./pages/ParserPage/ParserPage";

const RouterComponent = () => {
  const { profileStore: { profile } } = useStore();

  const isLogged = !!profile;

  return (
    <Router>
      <ScrollToTop />
      <LayoutContextProvider>
        <Routes>
          <>
            {!isLogged && (
              <>
                <Route path={ABOUT_PAGE} element={<AboutPage />} />
                <Route path={LAW_PAGE} element={<LawsPage />} />
                <Route path={FEEDBACK_PAGE} element={<FeedbackPage />} />
                <Route path={PARSER_PAGE} element={<ParserPage />} />
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
                    <Route path={INDEX} element={<Navigate to={USERS} />} />
                    <Route path={USERS} element={<UsersPage />} />
                    <Route path={USERS} element={<UsersPage />} />
                    <Route path={PARENT} element={<ParentPage />} />
                    <Route path={STUDENT} element={<StudentPage />} />
                    <Route path={DISCIPLINES} element={<DisciplinePage />} />
                    <Route path={MODULES} element={<ModulesPage />} />
                    <Route path={THEMES} element={<ThemesPage />} />
                    <Route path={LESSONS} element={<LessonsPage />} />
                    <Route path={LESSON} element={<LessonPage />} />
                    <Route path="*" element={<Navigate to={INDEX} />} />
                  </>
                )}

                {profile.role.name === RoleNamesEnum.Student && (
                  <>
                    <Route path={INDEX} element={<Navigate to={STUDENT_DASHBOARD} />} />
                    <Route path="*" element={<Navigate to={INDEX} />} />
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
