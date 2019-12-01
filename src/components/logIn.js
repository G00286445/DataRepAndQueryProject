import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class LogIn extends React.Component {

        render() {
            return (
              <div>
                <h1>Log In</h1>
                <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <label>User Name</label>
                  <input type='text' 
                  className='form-control' 
                  ></input>
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <input
                  type='text'
                  className='form-control'
                  ></input>
                </div>
                <div>
                  <input
                  type="submit"
                  value="Log In">
                  </input>
                </div>
                </form>
              </div>
            );
          }
        }
export default LogIn;