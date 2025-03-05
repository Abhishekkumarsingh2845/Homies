import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SecondaryHeader from '../../components/SecondaryHeader';
import PrimaryBtn from '../../components/PrimaryBtn';
import {Color} from '../../utlis/Color';
import ComplaintFormFill from './ComplaintFormFill';
import {Img} from '../../utlis/ImagesPath';
import {useNavigation, useRoute} from '@react-navigation/native';
import ComplaintTxtInpt from '../../components/ComplaintTxtInpt';
import {FontText} from '../../utlis/CustomFont';
import {get, post} from '../../utlis/Api';
import {useSelector} from 'react-redux';
import * as Yup from 'yup';
import {Formik} from 'formik';
import ComplaintGallery from '../../components/ComplaintGallery';

const ComplaintForm = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [landlord, setLandLord] = useState([]);
  const {token} = useSelector(state => state.auth.user);
  const {params} = useRoute();

  const initialValues = {
    topic: '',
    description: '',
    photo: [],
  };

  const complaintFields = [
    {
      name: 'topic',
      error: '',
      value: '',
      placeholder: 'Text Here...',
      keyboardType: 'default',
      label: 'Topic',
      multiline: false,
    },
    {
      name: 'description',
      error: '',
      value: '',
      placeholder: 'Text Here...',
      keyboardType: 'default',
      label: 'Description',
      height: 150,
      multiline: true,
    },
    {
      name: 'photo',
      error: '',
      value: '',
      type: 'photo',
      label: 'Open your Gallery',
      height: 110,
    },
  ];

  const validationSchema = Yup.object({
    topic: Yup.string()
      .required('Topic is required')
      .min(3, 'Topic must be at least 3 characters long'),

    description: Yup.string()
      .required('Description is required')
      .min(10, 'Description must be at least 10 characters long'),

    photo: Yup.array()
      .of(
        Yup.string().matches(
          /\.(jpeg|jpg|png)$/,
          'Each photo must be a valid image (jpeg, jpg, png)',
        ),
      )
      .required('At least one photo is required')
      .min(1, 'You must upload at least one photo')
      .max(3, 'You can upload a maximum of three photos'),
  });



  const getLandlord = async () => {
    try {
      const response = await get('./getUserProperty');
      console.log('response of the  getUserProperty', response.data[0]);
      console.log('->>landlord', response.data[0].landLordId);
      setLandLord(response.data[0]);
    } catch (error) {
      console.log('error in the getUserProperty', error.messsage);
    }
  };




  const SendComplaint = async values => {
    setLoading(true);
    console.log('values-   - - - - - - - - - - ', values);
    let data = {
      complaintTitle: values?.topic,
      complaintDescription: values?.description,
      propertyMedia: values?.photo?.map(item => {
        return {
          mediaType: 'Image',
          mediaUrl: item,
        };
      }),
      landLordId: landlord,
    };
    try {
      const response = await post('addComplaint', data, token);
      if (response) {
        params?.getComplaint();
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error sending complaint:', error);
    }
    setLoading(false);
  };


  

  useEffect(() => {
    getLandlord();
  }, []);

  return (
    <View style={styles.container}>
      <SecondaryHeader
        gobackImage={Img.goback}
        detailtxt={'Complaint Form'}
        onPress={() => navigation.goBack('BottomTab')}
      />
      <View style={styles.subcontainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={SendComplaint}
          validateOnChange={false}
          validateOnBlur={false}>
          {({values, errors, setFieldValue, handleSubmit}) => {
            console.log('values------------', values);

            return (
              <>
                {complaintFields.map((item, index) => {
                  if (item.type == 'photo') {
                    return (
                      <ComplaintGallery
                        value={values[item.name]}
                        error={errors[item.name]}
                        setValue={setFieldValue}
                        operationtxt={item.label}
                        fixheight={item.height}
                        name={item.name}
                      />
                    );
                  } else {
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
                    );
                  }
                })}

                <PrimaryBtn
                  loading={loading}
                  Onpress={handleSubmit}
                  txt={'Submit'}
                  bgcolor={Color.primary}
                  mgntop={90}
                />
              </>
            );
          }}
        </Formik>
      </View>
    </View>
  );
};

export default ComplaintForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  label: {
    fontSize: 16,
    fontFamily: FontText.medium,
    marginTop: 5,

    color: '#333',
  },
  uploadlabel: {
    fontSize: 16,
    fontFamily: FontText.medium,
    marginVertical: 10,

    color: '#333',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 14,
  },
  subcontainer: {
    paddingHorizontal: 20,
  },
});
