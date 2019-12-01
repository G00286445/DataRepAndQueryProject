import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class AddUser extends React.Component {

        render() {
            return (
              <div>
                <h1>New User</h1>
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
                <div className='form-group'>
                  <label>Confirm password</label>
                  <textarea
                  row='3'
                  className='form-control'
                  ></textarea>
                </div>
                <div>
                  <input
                  type="submit"
                  value="Create User">
                  </input>
                </div>
                </form>
              </div>
            );
          }
        }
export default AddUser;