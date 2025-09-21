import './profile.scss'
import { Header } from '../../widgets/header/index.ts';
import { Footer } from '../../widgets/footer/index.ts';
import auth from '../../shared/assets/images/auth.png';
import ArrowIcon from './assets/ArrowIcon.svg?react';
import { speaker } from '../home/imagesHome.ts';

import React, { useState, useEffect } from 'react';

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const Profile: React.FC = () => {
  const LOCAL_STORAGE_KEY = 'profileData';

  const [formData, setFormData] = useState<Profile>({
    firstName: 'V',
    lastName: 'V',
    email: 'tt45445@gmail.com',
    phone: '',
  }); 

  const [profileData, setProfileData] = useState<Profile> ({
    firstName: 'V',
    lastName: 'V',
    email: 'tt45445@gmail.com',
    phone: '',  
  })
  const [activeTab, setActiveTab] = useState<'account' | 'orders' | 'address' | 'password'>('account');
  const [currentPassword, setCurrentPassword] = useState<string>('oldpassword123');
  const [newPassword, setNewPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [hasOrders, setHasOrders] = useState<boolean>(false);

  const handleChangePassword = () => {
    if (newPassword === repeatPassword) {
      setCurrentPassword(newPassword);
      setNewPassword('');
      setRepeatPassword('');
      setError('');
    } else {
      setError('Пароли не совпадают');
    }};
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      setFormData(JSON.parse(savedData));
      setProfileData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData ((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
    setProfileData(formData)
    alert('Зміни збережено!');
  };



  interface Address {
    fullName: string;
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  }

  const ADDRESS_STORAGE_KEY = 'userAddress';
  const [address, setAddress] = useState<Address>({
    fullName: '',
    street: '',
    city: '',
    region: '',
    postalCode: '',
    country: '',
  });
useEffect(() => {
  const savedAddress = localStorage.getItem(ADDRESS_STORAGE_KEY);
  if (savedAddress) {
    setAddress(JSON.parse(savedAddress));
  }
}, []);

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setAddress((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleAddressSave = () => {
  localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(address));
  alert('Адресу збережено!');
};

  return (
  <>
  <Header />
  <div className="profile">
    <div className="profile__left">
      <img className='profile__photo' src={auth} />
      <h3 className='profile__name'>{profileData.firstName} {profileData.lastName}</h3>
      <p className='profile__gmail'>tt45445@gmail.com</p>
      <div className='profile__tabs'>
        <button 
        className={`profile__button-select ${activeTab === 'account' ? 'profile__button-select--active' : ''}`}
        onClick={() => setActiveTab('account')}
        >Account info<ArrowIcon style={{ width: 12, height: 12 }} />
        </button>     
        <button 
        className={`profile__button-select ${activeTab === 'orders' ? 'profile__button-select--active' : ''}`}
        onClick={() => setActiveTab('orders')}
        >My order<ArrowIcon style={{ width: 12, height: 12 }} />
        </button>
        <button 
        className={`profile__button-select ${activeTab === 'address' ? 'profile__button-select--active' : ''}`}
        onClick={() => setActiveTab('address')}
        >My adress<ArrowIcon style={{ width: 12, height: 12 }} />
        </button>
        <button 
        className={`profile__button-select ${activeTab === 'password' ? 'profile__button-select--active' : ''}`}
        onClick={() => setActiveTab('password')}
        >Change password<ArrowIcon style={{ width: 12, height: 12 }} />
        </button>
      </div>
    </div>
<div className="profile__right">
  {activeTab === 'account' && (
    <div className="profile__section profile__section--account">
      <h2 className="profile__title profile__title--account">Account info</h2>

      <div className="profile__field profile__field--account">
        <label htmlFor="firstName" className="profile__label profile__label--account">First Name *</label>
        <input
          className="profile__input profile__input--account"
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>

      <div className="profile__field profile__field--account">
        <label htmlFor="lastName" className="profile__label profile__label--account">Last Name *</label>
        <input
          className="profile__input profile__input--account"
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="profile__field profile__field--account">
        <label htmlFor="email" className="profile__label profile__label--account">Email Address *</label>
        <input
          className="profile__input profile__input--account"
          id="email"
          name="email"
          type="text"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="profile__field profile__field--account">
        <label htmlFor="phone" className="profile__label profile__label--account">Phone Number (Optional)</label>
        <input
          className="profile__input profile__input--account"
          id="phone"
          name="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <button
        onClick={handleSave}
        className="profile__button profile__button--account"
      >
        Зберегти зміни
      </button>
    </div>
  )}

{activeTab === 'orders' && (
  <div className="profile__section profile__section--orders">
    <h2 className="profile__title profile__title--orders">My Orders</h2>

    <button 
      onClick={() => setHasOrders(!hasOrders)}
      className="profile__button-toggle-orders"
    >
      {hasOrders ? 'Очистити замовлення' : 'Додати тестові замовлення'}
    </button>

    {!hasOrders ? (
      <p className="profile__description profile__description--orders">
        У вас поки немає замовлень.
      </p>
    ) : (
      <section className="product-recommendation"> 
        <div className="product-recommendation__header">
          <h3 className="product-recommendation__title">Your Orders</h3>
          <a href="#" className="product-recommendation__view-all">View All</a>
        </div>
        
        <div className="product-recommendation__list">
          {/* Продукти тут */}
          <div className="product-recommendation__item">
            <a href="#" className="product-recommendation__link">
                <img src={speaker} alt="Xomie Remid 8 Sport Water Resistance Watch" className="product-recommendation__image" />              
              <h2 className="product-recommendation__name">Xomie Remid 8 Sport Water Resistance Watch</h2>
              <p className="product-recommendation__price">$579.00</p>
            </a>
          </div>
          {/* інші елементи */}
        </div>
      </section>
    )}
  </div>
)}


  {activeTab === 'address' && (
    <div className="profile__section profile__section--address">
      <h2 className="profile__title profile__title--address">My Address</h2>

      <div className="profile__field profile__field--address">
        <label htmlFor="fullName" className="profile__label">Full Name *</label>
        <input
          className="profile__input"
          id="fullName"
          name="fullName"
          type="text"
          value={address.fullName}
          onChange={handleAddressChange}
        />
      </div>

      <div className="profile__field profile__field--address">
        <label htmlFor="street" className="profile__label">Street Address *</label>
        <input
          className="profile__input"
          id="street"
          name="street"
          type="text"
          value={address.street}
          onChange={handleAddressChange}
        />
      </div>

      <div className="profile__field profile__field--address">
        <label htmlFor="city" className="profile__label">City *</label>
        <input
          className="profile__input"
          id="city"
          name="city"
          type="text"
          value={address.city}
          onChange={handleAddressChange}
        />
      </div>

      <div className="profile__field profile__field--address">
        <label htmlFor="region" className="profile__label">Region/Province *</label>
        <input
          className="profile__input"
          id="region"
          name="region"
          type="text"
          value={address.region}
          onChange={handleAddressChange}
        />
      </div>

      <div className="profile__field profile__field--address">
        <label htmlFor="postalCode" className="profile__label">Postal Code *</label>
        <input
          className="profile__input"
          id="postalCode"
          name="postalCode"
          type="text"
          value={address.postalCode}
          onChange={handleAddressChange}
        />
      </div>

      <div className="profile__field profile__field--address">
        <label htmlFor="country" className="profile__label">Country *</label>
        <input
          className="profile__input"
          id="country"
          name="country"
          type="text"
          value={address.country}
          onChange={handleAddressChange}
        />
      </div>

      <button
        className="profile__button profile__button--address"
        onClick={handleAddressSave}
      >
        Зберегти адресу
      </button>
    </div>

  )}

  {activeTab === 'password' && (
    <div className="profile__section profile__section--password">
        <h2 className="profile__title profile__title--password">Change Password</h2>

        <div className="profile__field profile__field--password">
          <label htmlFor="currentPassword" className="profile__label profile__label--password">Current Password *</label>
          <input
            className="profile__input profile__input--password"
            id="currentPassword"
            value={currentPassword}
            readOnly
            name="currentPassword"
            type="text"
          />
        </div>

        <div className="profile__field profile__field--password">
          <label htmlFor="newPassword" className="profile__label profile__label--password">New Password *</label>
          <input
            className="profile__input profile__input--password"
            value={newPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPassword(e.target.value)
            }
            id="newPassword"
            name="newPassword"
            type="password"
          />
        </div>

        <div className="profile__field profile__field--password">
          <label htmlFor="confirmPassword" className="profile__label profile__label--password">Confirm New Password *</label>
          <input
            className="profile__input profile__input--password"
            id="confirmPassword"
            value={repeatPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRepeatPassword(e.target.value)
            }
            name="confirmPassword"
            type="password"
          />
        </div>

        <button className="profile__button profile__button--password-change" onClick={handleChangePassword}>
          Змінити пароль
        </button>
      </div>
  )}
</div>

  </div>
  <Footer />
  </>
  )
}

