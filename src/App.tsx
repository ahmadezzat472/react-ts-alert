import Alert from './components/ui/Alert'
import { AlertTriangle, Ban, Bell, CheckCheck, Info } from 'lucide-react';

function App() {

  return (
    <div style={{margin:"2rem"}}>
      <Alert 
        alerType="alert-default" 
        icon={<Bell />} 
        title={'Upgrade your plan'}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque{" "}
          <a href="/">laboriosam</a> iste totam officiis beatae quas.
        </p>
      </Alert>

      <Alert 
        alerType="alert-info" 
        icon={<Info />} 
        title={'Note'}
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus
          doloremque praesentiumlaboriosam iste totam officiis beatae sint non quas"
      />

      <Alert 
        alerType="alert-success" 
        icon={<CheckCheck />} 
        title={'Note'}
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus
          doloremque praesentiumlaboriosam iste totam officiis beatae sint non quas"
      />
      <Alert 
        alerType="alert-info" 
        icon={<Info />} 
        title={'Note'}
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus
          doloremque praesentiumlaboriosam iste totam officiis beatae sint non quas"
      />
      <Alert 
        alerType="alert-error" 
        icon={<Ban />} 
        title={'Something went wrong'}
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus
          doloremque praesentiumlaboriosam iste totam officiis beatae sint non quas"
      />
      
      <Alert 
        alerType="alert-warning" 
        icon={<AlertTriangle />} 
        title={'Tips & Tricks'}
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus
          doloremque praesentiumlaboriosam iste totam officiis beatae sint non quas"
      />

    </div>
  )
}

export default App
