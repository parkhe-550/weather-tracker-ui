import './App.css';
import { Route, Routes } from 'react-router-dom'
import { PrivateComponent } from './component/_private/private_component';
import { LoginComponent } from './component/_login/login_component';
import { WeatherComponent } from './component/_weather/weather_component';
import { SettingComponent } from './component/_setting/setting_component';
import { NotFoundComponent } from './component/_notfound/not_found_component';

function App(props) {
  return (
    <Routes>
      <Route path='*' element={<NotFoundComponent />} />
      <Route path='/' element={
        <PrivateComponent>
          <WeatherComponent/>
        </PrivateComponent>
      } />
      <Route path='/login' element={<LoginComponent />}/>
      <Route path='/settings' element={<SettingComponent/>}/>
      
    </Routes>
  );
}
export default App;
