import * as CheckinUtil from "../util/checkin_api_util";
export const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";
export const RECEIVE_CHECKINS = "RECEIVE_CHECKINS";
export const REMOVE_CHECKIN = "REMOVE_CHECKIN";

// action creators

export const receiveCheckins = checkins => {
  return {
    type: RECEIVE_CHECKINS,
    checkins
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

export const removeCheckin = checkin => {
  return {
    type: REMOVE_CHECKIN,
    checkinId: checkin.id
  };
}

// thunk actions

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

export const deleteCheckin = (id) => {
  return CheckinUtil.deleteCheckin(id).then(checkin =>
    dispatch(removeCheckin(checkin))
  )
}