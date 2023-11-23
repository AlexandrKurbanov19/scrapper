// INDEX
export const INDEX = '/';
// NO-AUTH
export const ABOUT_PAGE = '/about';
export const FEEDBACK_PAGE = '/feedback';
export const INSTRUCTION_PAGE = '/instruction';
export const PARSING_EXAMPLE_PAGE = '/example';
export const PARSER_PAGE = '/parser';
export const REGISTRATION = '/registration';
export const LAW_PAGE = '/law';
// AUTH
export const LOGIN = '/login';
export const LOGOUT = '/logout';
export const PROFILE = '/profile';
export const FORGET_PASSWORD = '/forget_password';
export const RESET_PASSWORD = '/reset_password';

// Admin routes
export const USERS = '/admin/users';
export const PARENT = '/admin/users/parent/:parentId';
export const STUDENT = '/admin/users/student/:studentId';

export const DISCIPLINES = '/admin/disciplines';
export const MODULES = '/admin/modules';
export const THEMES = '/admin/themes';
export const LESSONS = '/admin/lessons';
export const LESSON = '/admin/lessons/:lessonId';

export const makeStudentPath = (studentId: string) => `/admin/users/student/${studentId}`;
export const makeParentPath = (parentId: string) => `/admin/users/parent/${parentId}`;
export const makeLessonPath = (lessonId: string) => `/admin/lessons/${lessonId}`;

// Demo
export const LESSON_DEMO = '/admin/lesson-demo';

// ----- Student routes

export const STUDENT_DASHBOARD = '/dashboard';
export const STUDENT_LESSONS = '/lessons';
