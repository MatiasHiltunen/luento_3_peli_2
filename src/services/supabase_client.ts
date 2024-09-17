import { createClient } from '@supabase/supabase-js'
import { Database } from "./supabase"

const supabaseUrl = 'https://korvaa_omalla_supabase_projektin_urlilla.supabase.co'
const supabaseKey = "TÄHÄN SUPABASE API KEY (PUBLIC)"
export const supabase = createClient<Database>(supabaseUrl, supabaseKey)

export async function addPointsToDb(nickname: string, points: number) {

    if (!nickname) {
        alert("käyttäjänimi tarvitaan")
        return
    }

    const { data, error } = await supabase.from('ranking').insert([
        {
            nickname: nickname,
            points: points
        }
    ]).select()

    if (error) {
        alert("Tapahtui virhe: " + error.message)
        return
    }

    console.log(data)
    return data.at(0)

}