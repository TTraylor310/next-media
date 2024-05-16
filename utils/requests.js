// good to not throw error on deploy because of error caused by not being able to fetch data from the server
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null

// Fetch all properties
async function fetchProperties() {
  try {
    //not domain?
    if (!apiDomain) {
      console.log('No domain')
      return []
    }

    const res = await fetch(`${apiDomain}/properties`)
    if (!res.ok) {
      throw new Error('Error fetching properties')
    }
    return res.json()
    // console.log()
  } catch (error) {
    console.log('Error fetching the data BRO', error)
    return []
  }
}

// Fetch single property
async function fetchProperty(id) {
  try {
    //not domain?
    if (!apiDomain) {
      console.log('No domain')
      return null
    }
    const res = await fetch(`${apiDomain}/properties/${id}`)
    if (!res.ok) {
      throw new Error('Error fetching properties')
    }
    return res.json()
    // console.log()
  } catch (error) {
    console.log('Error fetching the data BRO', error)
    return null
  }
}

export { fetchProperties, fetchProperty }
