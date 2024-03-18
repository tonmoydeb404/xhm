import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';
import {AppState} from 'react-native';
import 'react-native-url-polyfill/auto';

const supabaseUrl = 'https://rgrwravxgqwizbssbhjy.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJncndyYXZ4Z3F3aXpic3NiaGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwODc2MTcsImV4cCI6MjAyNDY2MzYxN30.gBMXl3c-TGGVDZwAynZStB6_OVSkm9njb-ECmM6kF08';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener('change', state => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
