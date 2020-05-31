
const debug = (store) => (next) => (action) => {
  // je vois passer toutes les actions
  console.log(action);
  // je dois dire explicitement si je les laisse passer
  next(action);
};

export default debug;
