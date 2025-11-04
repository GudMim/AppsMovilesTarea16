import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { MyContext } from './Context';
import { router } from 'expo-router';

export default function Profile() {
  const { loginData, setLoginData } = useContext(MyContext);

  // Destructure con valores por defecto por si faltan campos
  const {
    credits = '-',
    email = '-',
    firstname = '-',
    lastname = '-',
    id = '-',
    pfp_url = '',
    username = '-',
    xp = '-',
  } = loginData || {};

  const onLogout = () => {
    setLoginData({});
    router.replace('/');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} accessibilityLabel="Perfil de usuario">
      <Text style={styles.header}>Perfil de usuario</Text>

      <View style={styles.card}>
        <Image
          style={styles.avatar}
          source={pfp_url ? { uri: pfp_url } : require('../assets/images/icon.png')}
          accessibilityLabel={`Foto de perfil de ${firstname}`}
        />

        <View style={styles.info}>
          <Text style={styles.name}>{firstname} {lastname}</Text>
          <Text style={styles.username}>@{username}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Información de la cuenta</Text>
        <View style={styles.row}><Text style={styles.label}>ID</Text><Text style={styles.value}>{id}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Email</Text><Text style={styles.value}>{email}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Créditos</Text><Text style={styles.value}>{credits}</Text></View>
        <View style={styles.row}><Text style={styles.label}>XP</Text><Text style={styles.value}>{xp}</Text></View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Otros</Text>
        <View style={styles.row}><Text style={styles.label}>Nombre</Text><Text style={styles.value}>{firstname}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Apellido</Text><Text style={styles.value}>{lastname}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Username</Text><Text style={styles.value}>{username}</Text></View>
        <View style={styles.row}><Text style={styles.label}>Foto de perfil (URL)</Text><Text style={[styles.value, styles.url]}>{pfp_url || '-'}</Text></View>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.logoutButton} onPress={onLogout} accessibilityLabel="Cerrar sesión">
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 16,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff7f9',
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 16,
    backgroundColor: '#eee',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  username: {
    color: '#555',
  },
  section: {
    width: '100%',
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  sectionTitle: {
    fontWeight: '700',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: { color: '#374151', fontWeight: '600' },
  value: { color: '#111' },
  url: { color: '#2563eb' },
  actions: { width: '100%', alignItems: 'center', marginTop: 12 },
  logoutButton: {
    backgroundColor: '#F87171',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 8,
  },
  logoutText: { color: '#fff', fontWeight: '700' },
});
