export const fetchCheckins = () =>
  $.ajax({
    method: "get",
    url: "api/checkins"
  });

export const fetchCheckin = id =>
  $.ajax({
    method: "get",
    url: `api/checkins/${id}`
  });

export const createCheckin = checkin =>
  $.ajax({
    method: "post",
    url: `api/checkins/`,
    data: { checkin }
  });

export const updateCheckin = checkin =>
  $.ajax({
    method: "patch",
    url: `api/checkins/${checkin.id}`,
    data: { checkin }
  });

export const deleteCheckin = id =>
  $.ajax({
    method: "delete",
    url: `api/checkins/${id}`
  });
