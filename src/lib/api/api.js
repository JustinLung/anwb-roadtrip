const BASE_URL = import.meta.env.VITE_BASE_URL
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY
const adventureEndpoint = 'GetAdventure'
const tripByIdEndpoint = 'GetTripById'
const categoryEndpoint = 'GetAllCategoryCards'
const categoryDetailEndpoint = 'GetCategoryByName'
const getPreviousCardTrips = 'GetPreviousCardTrips'
const getUpcomingTrips = 'GetPreviousCardTrips'
const suggestedCardTrips = 'GetSuggestedCardTrips'
const customDataSenderEndpoint = 'CustomDataSender'
const tripPlannerEndpoint = 'TripPlanner'
const unsplashBaseURL = 'https://api.unsplash.com'
const searchEnpoint = 'search'
const photosEndpoint = 'photos'
const query = 'vacation'
const userId = '1'
const username = 'Batu'

export async function getAdventureData() {
  try {
    const res = await fetch(`${BASE_URL}/${customDataSenderEndpoint}/${adventureEndpoint}`)
    const data = await res.text()
    const heroData = data?.split('\n')
    const [title, description] = heroData
    const formattedData = {
      title: title,
      description: description,
    }
    return formattedData
  } catch (err) {
    throw new Error()
  }
}

export async function getCategoryData() {
  try {
    const res = await fetch(`${BASE_URL}/${tripPlannerEndpoint}/${categoryEndpoint}`)
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export async function getPreviousTripData() {
  try {
    const res = await fetch(
      `${BASE_URL}/${tripPlannerEndpoint}/${getPreviousCardTrips}?userId=${userId}`,
    )
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export async function getSuggestedTripsData() {
  try {
    const res = await fetch(
      `${BASE_URL}/${tripPlannerEndpoint}/${suggestedCardTrips}?userId=${username}`,
    )
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export async function getUpcomingTripData() {
  try {
    const res = await fetch(
      `${BASE_URL}/${tripPlannerEndpoint}/${getUpcomingTrips}?userId=${userId}`,
    )
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export async function getTripData(params) {
  try {
    const res = await fetch(
      `${BASE_URL}/${tripPlannerEndpoint}/${tripByIdEndpoint}?tripId=${params}`,
    )
    return res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export async function getDetailCategory(params) {
  try {
    const res = await fetch(
      `${BASE_URL}/${tripPlannerEndpoint}/${categoryDetailEndpoint}?name=${params}`,
    )
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

export async function getImageData() {
  try {
    const res = await fetch(
      `${unsplashBaseURL}/${searchEnpoint}/${photosEndpoint}/?client_id=${ACCESS_KEY}&query=${query}"&per_page=4&page=2"`,
    )
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}
