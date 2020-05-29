export const SET_BRAND = "SET_BRAND";
export const SET_MODEL = "SET_MODEL";
export const SET_LICENSE_PLATE = "SET_LICENSE_PLATE";
export const SET_MECHANIC_NAME = "SET_MECHANIC_NAME";
export const SET_ITEMS_LIST = "SET_ITEMS_LISTS";

export const setBrand = brand => ({ type: SET_BRAND, payload: brand });
export const setModel = model => ({ type: SET_MODEL, payload: model });
export const setLicensePlate = licensePlate => ({ type: SET_LICENSE_PLATE, payload: licensePlate });
export const setMechanicName = mechanicName => ({ type: SET_MECHANIC_NAME, payload: mechanicName });
export const setItemsList = itemsList => ({ type: SET_ITEMS_LIST, payload: itemsList });
