export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      blog_posts: {
        Row: {
          article_type: string
          category: string
          content_html: string
          created_at: string
          excerpt: string
          id: string
          image_alt: string | null
          image_url: string | null
          keywords: string[]
          meta_description: string
          meta_title: string | null
          published_at: string
          read_time: string
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          article_type?: string
          category: string
          content_html: string
          created_at?: string
          excerpt: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          keywords?: string[]
          meta_description: string
          meta_title?: string | null
          published_at?: string
          read_time?: string
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          article_type?: string
          category?: string
          content_html?: string
          created_at?: string
          excerpt?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          keywords?: string[]
          meta_description?: string
          meta_title?: string | null
          published_at?: string
          read_time?: string
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      blog_settings: {
        Row: {
          id: number
          last_published_at: string | null
          paused: boolean
          timezone: string
          updated_at: string
        }
        Insert: {
          id?: number
          last_published_at?: string | null
          paused?: boolean
          timezone?: string
          updated_at?: string
        }
        Update: {
          id?: number
          last_published_at?: string | null
          paused?: boolean
          timezone?: string
          updated_at?: string
        }
        Relationships: []
      }
      blog_topics_queue: {
        Row: {
          angle: string | null
          created_at: string
          id: string
          keywords: string[]
          persona_hint: string | null
          position: number
          status: string
          title_hint: string
          type: string
          updated_at: string
          used_at: string | null
        }
        Insert: {
          angle?: string | null
          created_at?: string
          id?: string
          keywords?: string[]
          persona_hint?: string | null
          position?: number
          status?: string
          title_hint: string
          type: string
          updated_at?: string
          used_at?: string | null
        }
        Update: {
          angle?: string | null
          created_at?: string
          id?: string
          keywords?: string[]
          persona_hint?: string | null
          position?: number
          status?: string
          title_hint?: string
          type?: string
          updated_at?: string
          used_at?: string | null
        }
        Relationships: []
      }
      cartographie_sessions: {
        Row: {
          access_email_sent_at: string | null
          answers: Json | null
          completed_at: string | null
          cout_statu_quo: string | null
          created_at: string
          decision_repoussee: string | null
          email: string | null
          id: string
          payment_status: string
          result: Json | null
          source: string | null
          stripe_session_id: string
          updated_at: string
        }
        Insert: {
          access_email_sent_at?: string | null
          answers?: Json | null
          completed_at?: string | null
          cout_statu_quo?: string | null
          created_at?: string
          decision_repoussee?: string | null
          email?: string | null
          id?: string
          payment_status?: string
          result?: Json | null
          source?: string | null
          stripe_session_id: string
          updated_at?: string
        }
        Update: {
          access_email_sent_at?: string | null
          answers?: Json | null
          completed_at?: string | null
          cout_statu_quo?: string | null
          created_at?: string
          decision_repoussee?: string | null
          email?: string | null
          id?: string
          payment_status?: string
          result?: Json | null
          source?: string | null
          stripe_session_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      guide_leads: {
        Row: {
          company: string
          created_at: string
          email: string
          first_name: string
          guide_slug: string
          id: string
        }
        Insert: {
          company: string
          created_at?: string
          email: string
          first_name: string
          guide_slug?: string
          id?: string
        }
        Update: {
          company?: string
          created_at?: string
          email?: string
          first_name?: string
          guide_slug?: string
          id?: string
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
