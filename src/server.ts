import { http } from './app';
import './webSocket';

http.listen(process.env.PORT || 3333, ()=> {
  console.log('Server is running!! 🚀🚀');
});
