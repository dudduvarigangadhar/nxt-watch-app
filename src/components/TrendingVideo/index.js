const TrendingVideo = props => {
  const {details} = props
  console.log(details)
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = details

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default TrendingVideo
