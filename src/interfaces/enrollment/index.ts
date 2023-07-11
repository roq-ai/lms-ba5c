import { CourseInterface } from 'interfaces/course';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface EnrollmentInterface {
  id?: string;
  course_id?: string;
  team_member_id?: string;
  created_at?: any;
  updated_at?: any;

  course?: CourseInterface;
  user?: UserInterface;
  _count?: {};
}

export interface EnrollmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  course_id?: string;
  team_member_id?: string;
}
