import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loader/FullScreenLoader';
import { SearchResult } from '../../components/movies/SearchResult';
import Icon from '@react-native-vector-icons/ionicons';
import { useAuth0 } from 'react-native-auth0';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { clearSession } = useAuth0();
  const { isLoading, nowPlaying, popular, topRated, upcoming, movieName, setMovieName, searchResults, popularNextPage, topRatedNextPage, upcomingNextPage } = useMovies();

  if ( isLoading ) {
    return <FullScreenLoader/>;
  }

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (error) {
      console.log('Logout error: ', error);
    }
  };
  return (
    <>
      <View>
        <View style={{position: 'relative'}}>
        <TextInput
         placeholder="Buscar película..."
         value={movieName}
         onChangeText={setMovieName}
         style={{
           borderColor: '#ccc',
           borderWidth: 1,
           borderRadius: 8,
           padding: 10,
           marginVertical: 10,
           marginHorizontal: 10,
         }}
        />
        <Pressable style={{position: 'absolute', right: 20, top: 18}} onPress={() => setMovieName('')}>
          <Icon name="close-circle-outline" size={25}/>
        </Pressable>
        </View>
        {
          movieName && movieName !== '' ?
          <FlatList
         data={searchResults}
         keyExtractor={(item) => item.id.toString()}
         renderItem={({ item }) => (<SearchResult result={item}/>)}
       />
        : null}
      </View>
    <ScrollView>
      <View style={{ marginTop: top + 20, marginBottom: 30}}>

        {/* Principal */}
        <PosterCarousel
        movies={nowPlaying}
        title="Lo mas actual"
        />

        {/* Popular */}
        <HorizontalCarousel movies={popular} title="Populares" loadNextPage={popularNextPage}/>

        {/* Top Rated */}
        <HorizontalCarousel movies={topRated} title="Mejor calificadas" loadNextPage={topRatedNextPage} />

        {/* Próximamente */}
        <HorizontalCarousel movies={upcoming} title="Próximamente" loadNextPage={upcomingNextPage} />
      </View>
    </ScrollView>
     <Pressable onPress={onLogout}>
            <Text>LogoutButton</Text>
          </Pressable>
    </>
  );
};
