import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loginSubmit(login){
  return {type : types.LOGIN_SUBMIT , login};

}

export function loadCourses(){

  return function(dispatch){
    return courseApi.getAllCourses().then(courses =>{
      dispatch(loadCoursesSuccess(courses))
    }).catch(error => {
      throw (error);
    });
  }
}
