import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ondwvgjyzshewqlfsxjq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uZHd2Z2p5enNoZXdxbGZzeGpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU0OTg1MDMsImV4cCI6MjAxMTA3NDUwM30.TbAnxpPnxtcjLcnRyV_QzJ4A0diDS9xVt5ZTSUfGUVo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})