import React, { Component } from 'react';

class TableHeader extends Component {
    render() {
        return (
            
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Telephone</th>
                        <th>regDate</th>
                        <th></th>
                    </tr>
                </thead>
          
        );
    }
}

export default TableHeader;
