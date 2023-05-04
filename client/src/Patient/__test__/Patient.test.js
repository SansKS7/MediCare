import React from "react";
import { render, screen,fireEvent,act , waitFor} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeaderP from '../HeaderP'
import Patient_home from "../Patient_home";
import Patient_login,{handleSubmit} from "../Patient_login";



test('renders the navigation links of patient dashboard', () => {
    render(
      <BrowserRouter>
        <HeaderP />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
  
    const hospitalLink = screen.getByRole('link', { name: 'Hospital' });
    expect(hospitalLink).toBeInTheDocument();
  
    const doctorLink = screen.getByRole('link', { name: 'Doctor' });
    expect(doctorLink).toBeInTheDocument();
  
    const profileLink = screen.getByRole('link', { name: 'Profile' });
    expect(profileLink).toBeInTheDocument();
  
    const viewAppointment = screen.getByRole('link', { name: 'View Appointment' });
    expect(viewAppointment).toBeInTheDocument();

    const buttonLogout = screen.getByRole('button');
    expect(buttonLogout).toBeInTheDocument();

 
  });



    test('Patient Dashboard ', () => {
        render(
            <BrowserRouter>
              <Patient_home/>
            </BrowserRouter>
          );
      const title = screen.getByText(/Medi-Care/i);
      
      expect(title).toBeInTheDocument();
      
    });

  
    
describe('LoginPage', () => {
    it('submits username and password when form is submitted', () => {
      // render the login page component
      const handleSubmit = jest.fn();
      const { getByLabelText, getByText } = 
      render(
        <BrowserRouter>
        <Patient_login onSubmit={handleSubmit}/>;
        </BrowserRouter>
        );
      
      // get the input fields
      const usernameInput = getByLabelText('Enter Patient-ID');
      expect(usernameInput).toBeInTheDocument();
      const passwordInput = getByLabelText('Password');
      expect(passwordInput).toBeInTheDocument();

      fireEvent.change(usernameInput, { target: { value: 'P101' } });
      fireEvent.change(passwordInput, { target: { value: 'sanket123' } });
  
      const button = screen.getByRole('button', { name: 'Login' });
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      expect(handleSubmit).toHaveBeenCalledTimes(0);
      });
    });
 

    test('useEffect sets session variable to null', () => {
      let mySessionVariable;
      act(() => {
        render(
          <BrowserRouter>
          <Patient_login/>;
          </BrowserRouter>
          );
        mySessionVariable = sessionStorage.getItem('PatientUser');
      });
    
      expect(mySessionVariable).toBeNull();
    })


    test('formdata submit', () => {
      // render the login page component
      const handleSubmit = jest.fn();
      const { getByLabelText, getByText } = 
      render(
        <BrowserRouter>
        <Patient_login onSubmit={handleSubmit}/>;
        </BrowserRouter>
        );
      
      // get the input fields
      const usernameInput = getByLabelText('Enter Patient-ID');
      expect(usernameInput).toBeInTheDocument();
      const passwordInput = getByLabelText('Password');
      expect(passwordInput).toBeInTheDocument();

      fireEvent.change(usernameInput, { target: { value: 'P101' } });
      fireEvent.change(passwordInput, { target: { value: 'sanket123' } });
      
      // const formData = getByTestId('login');
      // expect(formData).toHaveTextContent('p_id: P101');
      // expect(formData).toHaveTextContent('password: sanket123');
      
      const button = screen.getByRole('button', { name: 'Login' });
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      expect(handleSubmit).toHaveBeenCalledTimes(0);
      });
    
  
    
    // const server = setupServer(
    //   rest.post('/api/patientLogin', (req, res, ctx) => {
    //     return res(ctx.status(200), ctx.json({ message: 'Success' }));
    //   })
    // );
    
    // beforeAll(() => server.listen());
    // afterEach(() => server.resetHandlers());
    // afterAll(() => server.close());
    
    // test('submitting data to API', async () => {
    //   const { getByLabelText, getByText } = render(<login />);
    //   const id = getByLabelText('Enter Patient-ID');
    //   expect(id).toBeInTheDocument();
    //   const password = getByLabelText('Password');
    //   expect(password).toBeInTheDocument();
    //   const submitButton = getByText('login');
    
    //   fireEvent.change(id, { target: { value: 'P101' } });  
    //   fireEvent.change(password, { target: { value: 'sanket123' } });
    //   fireEvent.click(submitButton);
    
    //   await waitFor(() => expect(server.handlers[0].requests[0].body).toEqual('{"p_id":"P101"}'));
    //   await waitFor(() => expect(server.handlers[0].requests[0].body).toEqual('{"password":"sanket123"}'));
    //   await waitFor(() => expect(getByText('Success')).toBeInTheDocument());
    // });
    
