<template>
  <div class="container">
    <div>
      <div class="search-div">
        <label for="search">Название</label>
        <input type="text" name="search" class="form-control" v-model="search">
      </div>
      <div class="search-div">
        <label for="search">Жанр</label>
        <b-form-select v-model="selected" :options="options" @change="getNewList"></b-form-select>
      </div>
    </div>
    <div v-if="movieList" style="padding-top: 15px">
      <div class="row">
        <template v-for="item in movieList" >
          <div :key="item.id" class="col-md-3 item-container" @click="showMovieData(item)">
            <div>
              <img :src="item.image" :alt="item.name">
              <h4>{{ item.name }}</h4>
            </div>
          </div>
        </template>
      </div>
    </div>
    <template v-if="showModal">
      <showMovie :itemData="itemData" @close="showModal = false" @selectSsession="selectSsession" />
    </template>
    <template v-if="showsSsessionTime">
      <showsSsessionTime 
        @close="showsSsessionTime = false" 
        @showPlace="showPlace"
        :selectSsessionTime="selectSsessionTime" 
      />
    </template>
    <template v-if="showFreePlace">
      <showPlace @close="showFreePlace = false" 
        :placeData="placeData" 
        @showTicket="ticket"
      />
    </template>
    <template v-if="showTicket">
      <showTicket @close="showTicket = false" :ticketData="ticketData" />
    </template>
  </div>
</template>

<script>
import showMovie from '@/components/ShowMovie/showMovie.vue';
import showsSsessionTime from '@/components/ShowMovie/showsSsessionTime.vue';
import showPlace from '@/components/ShowMovie/showPlace.vue';
import showTicket from '@/components/ShowMovie/showTicket.vue'
import { getAPI } from '@/API.js';
const movieList = new getAPI();
export default {
  components: {
    showMovie,
    showsSsessionTime,
    showPlace,
    showTicket
  },
  data() {
    return {
      search: '',
      movieList: null,
      showModal: false,
      selectSsessionTime: null,
      showsSsessionTime: false,
      selected: '',
      options: [
        { value: 0, text: 'ACTION' },
        { value: 1, text: 'ADVENTURES' },
        { value: 2, text: 'COMEDY' },
        { value: 3, text: 'DRAMA' },
        { value: 4, text: 'HORROR' },
        { value: 4, text: 'WESTERNS' }
      ],
      placeData: null,
      showFreePlace: false,
      ticketData: null,
      showTicket: false
    }
  },
  created() {
    this.getData();
  },
  watch: {
    search: {
    handler() {
      this.getNewList();
    }
    },
  },
  methods: {
    getData() {
      movieList.getList().then(jsonData => {
        this.movieList = jsonData.data.data;
      })
      .catch(err => console.error(err))
    },
    showMovieData(item) {
      this.itemData = item;
      this.showModal = true;
    },
    selectSsession(data) {
      this.showModal = false;
      this.selectSsessionTime = data;
      this.showsSsessionTime = true;
    },
    getNewList() {
      movieList.searchForMovie('', this.search, this.selected ).then(newData => {
        this.movieList = newData.data.data;
      })
      .catch(err => console.error(err))
    },
    showPlace(data) {
      movieList.сheckFreePlaces(data.id, data.date, data.time).then(place => {
        this.placeData = { id: data.id, date: data.date, time: data.time, place: place.data.data };
        this.showsSsessionTime = false;
        this.showFreePlace = true;
      })
      .catch(err => console.error(err))
    },
    ticket(data) {
      this.ticketData = data;
      this.showFreePlace = false;
      this.showTicket = true;
    }
  }
}
</script>

<style scoped>
  .item-container {
    cursor: pointer;
    padding: 10px;
    border-radius: 0.25rem;
    transition: 0.5s;
  }
  .item-container > div {
    padding: 10px 0 0 0;
    text-align: center;
  }
  .item-container > div > img {
    width: 90%;
  }
  .item-container:hover {
    background: #d8d8d8;
  }
  .search-div {
    margin-bottom: 10px
  }
</style>
