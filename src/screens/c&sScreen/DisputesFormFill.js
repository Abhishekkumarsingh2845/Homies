import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import { Img } from '../../utlis/ImagesPath';
import Tick from 'react-native-vector-icons/EvilIcons';
import { FontText } from '../../utlis/CustomFont';
import { Color } from '../../utlis/Color';
import PrimaryBtn from '../../components/PrimaryBtn';
import { useNavigation, useRoute } from '@react-navigation/native';
import ComplaintTxtInpt from '../../components/ComplaintTxtInpt';
import { ScreenDimensions } from '../../utlis/DimensionApi';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik'
import { post } from '../../utlis/Api';

const DisputesFormFill = () => {
  const navigation = useNavigation();
  const { token } = useSelector(state => state.auth.user);
    const { params } = useRoute()
    const [loading , setLoading] = useState(false)



  const initialValues = {
    landLord: '',
    propertyName: '',
    description: ''
  }

  const validationSchema = Yup.object({
    landLord: Yup.string()
      .required('landLord is required'),

    propertyName: Yup.string()
      .required('property Name is required'),

    description: Yup.string()
      .required('description is required')
      .min(10, 'Description must be at least 10 characters long'),
  });

  const disputesFields = [
    {
      name: 'landLord',
      error: '',
      value: '',
      placeholder: 'Text Here...',
      keyboardType: 'default',
      label: 'LandLord Name',
      multiline: false

    },
    {
      name: 'propertyName',
      error: '',
      value: '',
      placeholder: 'Text Here...',
      keyboardType: 'default',
      label: 'Property Name',
      multiline: true
    },
    {
      name: 'description',
      error: '',
      value: '',
      placeholder: 'Text Here...',
      keyboardType: 'default',
      label: 'Description',
      height: 150,
      multiline: true
    },
  ]

  const SendDispute = async (values) => {
    setLoading(true)

    let data = {
      // "propertyId": "6773a25f51be0fa4b0c3d953",
      // "landLordId": "6773972194f1b2bc916447e6",
      landLordName: values.landLord,
      propertyName: values?.propertyName,
      dispute_description: values?.description,
            landLordId : "67a5972a4130fd4a51c061b4"
    }

    try {
      const response = await post(
        'addDispute',
        data,
        token,
      );
      if (response) {
        params?.getDisputes()
        navigation.goBack()
      }
    } catch (error) {
      console.error('Error sending disputes:', error);
    }
    setLoading(false)
  };
  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Disputes'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.subconatiner}>
         <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={SendDispute}
                  validateOnChange={false}
                  validateOnBlur={false}
                >
                            {
            ({ values, errors, setFieldValue, handleSubmit }) => {


              return (
                <>
                  {
                    disputesFields.map((item, index) => {
                        return (
                          <ComplaintTxtInpt
                            value={values[item.name]}
                            placeholder={item.placeholder}
                            error={errors[item.name]}
                            setValue={setFieldValue}
                            name={item.name}
                            label={item.label}
                            height={item.height}
                            multiline={item.multiline}

                          />

                        )
                      

                    })
                  }

                  <PrimaryBtn
                    loading={loading}
                    Onpress={handleSubmit}
                    txt={'Submit'}
                    bgcolor={Color.primary}
                    mgntop={90}
                  />
                </>
              )

            }
          }
                </Formik>
        {/* <Text style={styles.topictxt}>Landlord Name</Text>
        <Text style={styles.topictype}>Mukesh Kumar</Text>
        <Text style={styles.topictxt}>Property Name</Text>
        <Text style={styles.topictype}>Asteria hostel</Text>
        <Text style={styles.descriptiontxt}>Description</Text>

         <Text style={styles.detaildescription}>
          Cleanliness: The common areas and bathrooms are not being cleaned
          regularly, leading to an unhygienic environment.
        </Text> 
        <ComplaintTxtInpt height={160} multiline={false} bgcolor="#F2F2F2" />
        <PrimaryBtn
          loading={loading}
          bgcolor={Color.primary} 
          txt={'Submit'} 
          mgntop={ScreenDimensions.screenHeight * 0.25} 
          />  */}
      </View>
    </View>
  );
};

export default DisputesFormFill;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  subconatiner: {
    paddingHorizontal: 20,
  },
  imgstyle: {
    width: 100,
    height: 80,
  },
  attachmentconatiner: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progresscontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    marginTop: 20,
  },
  progressstyle: {
    width: 25,
    height: 25,
  },
  topictxt: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: FontText.bold,
    lineHeight: 20,
    color: '#000000',
  },
  topictype: {
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 20,
    color: '#7D7D7D',
    lineHeight: 18,
  },
  descriptiontxt: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: FontText.bold,
    lineHeight: 20,
    color: '#000000',
  },
  detaildescription: {
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 20,
    color: '#7D7D7D',
    lineHeight: 18,
  },
  statuscontainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detaildescription: {
    fontSize: 14,
    fontFamily: FontText.light,
    lineHeight: 20,
    color: Color.clr87,
    lineHeight: 18,
  },
});
