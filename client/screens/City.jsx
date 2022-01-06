import React, { useState, useEffect } from 'react';
import { ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ListItem from '../components/ListItem';
import Modal from '../components/Modal';
import SearchBar from '../components/SearchBar';
import { PrimaryButton, PrimaryTextButton } from '../GlobalStyle';
import cityApi from '../api/cityApi';
import { getAllCity } from '../redux/slices/citySlice';

const City = () => {
    const dispatch = useDispatch();

    const cities = useSelector(state => state.city.current);
    const [visibleAddModal, setVisibleAddModal] = useState(false);
    const [visibleEditModal, setVisibleEditModal] = useState(false);
    const [city, setCity] = useState('');
    const [editableCity, setEditableCity] = useState({
        id: '',
        name: ''
    });
    const [cityQuery, setCityQuery] = useState('');
    const [cityQueryList, setCityQueryList] = useState([]);

    const handleAddModal = () => {
        setVisibleAddModal(!visibleAddModal);
    };

    const handleEditModal = (oldValue, id) => {
        setVisibleEditModal(!visibleEditModal);
        if (oldValue) {
            setEditableCity({
                ...editableCity,
                name: oldValue,
                id
            });
        }
    };

    const addCity = async () => {
        try {
            await cityApi.createCity(city);
            ToastAndroid.show('Add successfully', ToastAndroid.BOTTOM);
            setCity('');
            dispatch(getAllCity());
        } catch(error) {
            alert(error.response.data.error);
        }
    };

    const editCity = async () => {
        try {
            await cityApi.modifyCity(editableCity.id, editableCity.name);
            ToastAndroid.show('Edit successfully', ToastAndroid.BOTTOM);
            setCityQuery('');
            dispatch(getAllCity());
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    const deleteJobTitle = async (id) => {
        try {
            await cityApi.deleteCity(id);
            ToastAndroid.show('Delete successfully', ToastAndroid.BOTTOM);
            setCityQuery('');
            dispatch(getAllCity());
        } catch(error) {
            console.log(error);
            alert(error.response.data.error);
        }
    };

    useEffect(async () => {
        if (cityQuery) {
            try {
                const cityQueryListResponse = await cityApi.searchCity(cityQuery);
                setCityQueryList(cityQueryListResponse);
            } catch (error) {
                alert(error.response.data.error);
            }
        }
    }, [cityQuery]);

    return (
        <>
            <Modal
                visible={visibleAddModal}
                handleModal={handleAddModal}
                textInput={city}
                handleInput={(text) => setCity(text)}
                title='Add city'
                placeholder='City...'
                callback={addCity}
            />
            <Modal
                visible={visibleEditModal}
                handleModal={handleEditModal}
                textInput={editableCity.name}
                handleInput={(text) => setEditableCity({
                    ...editableCity,
                    name: text
                })}
                title='Edit city'
                callback={editCity}
            />
            <SearchBar
                    placeholder='Search...'
                    text={cityQuery}
                    setText={setCityQuery}
            />
            <ListItem
                data={cityQuery ? cityQueryList : cities}
                field='name'
                editCallback={handleEditModal}
                deleteCallback={deleteJobTitle}
                noItemFoundTitle='No city found'
            />
            <PrimaryButton onPress={handleAddModal}>
                <PrimaryTextButton>Add city</PrimaryTextButton>
            </PrimaryButton>
        </>
    )
};

export default City;