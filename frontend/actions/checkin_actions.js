import * as CheckinUtil from "../util/checkin_api_util";

export const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";
export const RECEIVE_CHECKINS = "RECEIVE_CHECKINS";
export const DELETE_CHECKIN = "DELETE_CHECKIN";

export const receiveCheckins = checkins => {
  return {
    type: RECEIVE_CHECKINS,
    checkins: checkins
  }
}

export const receiveCheckin = payload => {
  return {
    type: RECEIVE_CHECKIN,
    checkin: payload.checkin,
    drinks: payload.drinks,
    breweries: payload.breweries
  }
}

export const deleteCheckin = (checkin) => {
  return {
    type: DELETE_CHECKIN,
    checkinId: checkin.id
  };
}

export const fetchCheckins = () => dispatch => {
  return CheckinUtil.fetchCheckins().then(checkins =>
    dispatch(receiveCheckins(checkins)))
}

export const fetchCheckin = (id) => dispatch => {
  return CheckinUtil.fetchCheckin(id).then(payload =>
    dispatch(receiveCheckin(payload))
  );
}

export const createCheckin = (checkin) => {
  return CheckinUtil.createCheckin(checkin).then(payload =>
    dispatch(receiveCheckin(payload))
  )
}

export const removeCheckin = (id) => {
  return CheckinUtil.removeCheckin(id).then(checkin =>
    dispatch(deleteCheckin(checkin))
  )
}