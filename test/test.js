import Measurebar from 'facade/measurebar';

const map = M.map({
  container: 'mapjs',
});

const mp = new Measurebar();

map.addPlugin(mp);
