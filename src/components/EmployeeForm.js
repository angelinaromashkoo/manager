import React, {Component} from 'react';
import {Picker, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {CardSection, Input} from './common';

class EmployeeForm extends Component {
  renderPickerItems = () => {
    const {shift} = this.props;
    const weekDays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    return (
      <Picker
        selectedValue={shift}
        onValueChange={(value) =>
          this.props.employeeUpdate({prop: 'shift', value})
        }>
        {weekDays.map((item, index) => {
          return <Picker.Item label={item} value={item} key={index} />;
        })}
      </Picker>
    );
  };

  render() {
    const {name, phone} = this.props;
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={(value) =>
              this.props.employeeUpdate({prop: 'name', value})
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="213-24-81"
            value={phone}
            onChangeText={(value) =>
              this.props.employeeUpdate({prop: 'phone', value})
            }
          />
        </CardSection>
        <CardSection style={styles.cardSectionContainer}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <View style={styles.viewContainer}>{this.renderPickerItems()}</View>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardSectionContainer: {
    padding: 13,
  },
  viewContainer: {
    flex: 1,
    paddingLeft: 85,
  },
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
});

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);
