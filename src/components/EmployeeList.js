import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, View} from 'react-native';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderItem(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.employees}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={(employee) => employee.uid}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });
  return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
