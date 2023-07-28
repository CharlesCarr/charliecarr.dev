export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      views: {
        Row: {
          count: number
          created_at: string | null
          id: string
          slug: string | null
        }
        Insert: {
          count?: number
          created_at?: string | null
          id?: string
          slug?: string | null
        }
        Update: {
          count?: number
          created_at?: string | null
          id?: string
          slug?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
