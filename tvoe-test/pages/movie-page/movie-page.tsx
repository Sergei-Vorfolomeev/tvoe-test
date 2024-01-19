import React from 'react'

import { MovieHeader } from '@/components'
import { Movie } from '@/components'
import { RECOMMENDATIONS, SERIAL } from '@/models/data'
import { Recommendations } from '@/components/recommendations/recommendations'

const MoviePage = () => {
  return (
    <>
      <MovieHeader />
      <Movie
        movie={SERIAL}
        recommendations={<Recommendations recommendations={RECOMMENDATIONS} />}
      />
    </>
  )
}

export default MoviePage
