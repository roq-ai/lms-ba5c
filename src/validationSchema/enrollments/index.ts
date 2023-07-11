import * as yup from 'yup';

export const enrollmentValidationSchema = yup.object().shape({
  course_id: yup.string().nullable(),
  team_member_id: yup.string().nullable(),
});
