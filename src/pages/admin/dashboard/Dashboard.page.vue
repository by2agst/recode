<template>
  <q-page class="bg-blue-grey-1 q-pa-md">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-6 col-md-3" v-for="i in 4" :key="`a${i}`">
        <q-card>
          <q-card-section>
            <div class="row items-center">
              <div class="col">
                <div class="text-subtitle1">Total Profit</div>
                <div class="text-subtitle2 text-grey">All Customs</div>
              </div>
              <div class="col-auto text-center">
                <div class="text-h4"
                  :class="{
                    'text-warning': i === 1,
                    'text-accent': i === 2,
                    'text-positive': i === 3,
                    'text-primary': i === 4,
                  }"
                  >
                  {{50 + i * 10}}
                </div>
              </div>
            </div>
            <q-linear-progress
              size="5px"
              :class="{
                'text-warning': i === 1,
                'text-accent': i === 2,
                'text-positive': i === 3,
                'text-primary': i === 4,
              }"
              :value="(50 + i * 10) / 100"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-sm-6 col-md-4" v-for="(img, i) in images" :key="i">
        <q-card>
          <q-img
            :src="img"
            :ratio="1"
          />

          <q-card-section>
            <q-btn
              fab
              color="primary"
              :label="i"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Img {{i+1}}
              </div>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">

              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="16px" color="warning" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              Quasar
            </div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn flat color="primary">
              Read more ...
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-12 col-md-8">
        <q-table
          title="Users"
          :data="data"
          :columns="columns"
          row-key="recordID"
          >
          <template v-slot:body-cell-companyAgent="props">
            <q-td :props="props">
              <q-item dense class="q-px-none">
                <q-item-section avatar>
                  <q-avatar>
                    <q-avatar color="primary" text-color="white">{{props.value.substring(0,1)}}</q-avatar>
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>
                    {{props.value}}
                  </q-item-label>
                  <q-item-label caption>
                    {{job(props.row.type)}}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
          <template v-slot:body-cell-companyName="props">
            <q-td :props="props">
              <q-item dense class="q-px-none">
                <q-item-section>
                  <q-item-label>
                    {{props.value}}
                  </q-item-label>
                  <q-item-label caption>
                    {{props.row.country}}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-td>
          </template>
        </q-table>
      </div>
      <div class="col-12 col-md-4">
        <div class="bg-white">
          <q-scroll-area class="full-width" style="height: 435px;">
            <div class="q-pa-md">
              <q-timeline color="secondary">
                <q-timeline-entry heading>
                  <span class="text-h5">Timeline heading</span>
                </q-timeline-entry>

                <q-timeline-entry
                  title="Event Title"
                  subtitle="February 22, 1986"
                  >
                  <div>
                    Lorem ipsum dolor sit amet
                  </div>
                </q-timeline-entry>

                <q-timeline-entry
                  title="Event Title"
                  subtitle="February 21, 1986"
                  icon="delete"
                  >
                  <div>
                    Lorem ipsum dolor sit amet
                  </div>
                </q-timeline-entry>

                <q-timeline-entry heading>
                  <span class="text-h5">November, 2017</span>
                </q-timeline-entry>

                <q-timeline-entry
                  title="Event Title"
                  subtitle="February 22, 1986"
                  avatar="https://cdn.quasar.dev/img/avatar2.jpg"
                  >
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </q-timeline-entry>

                <q-timeline-entry
                  title="Event Title"
                  subtitle="February 22, 1986"
                  >
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </q-timeline-entry>

                <q-timeline-entry
                  title="Event Title"
                  subtitle="February 22, 1986"
                  color="orange"
                  icon="done_all"
                  >
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </q-timeline-entry>

                <q-timeline-entry
                  title="Event Title"
                  subtitle="February 22, 1986"
                  >
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </q-timeline-entry>

                <q-timeline-entry
                  title="Event Title"
                  subtitle="February 22, 1986"
                  >
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                </q-timeline-entry>
              </q-timeline>
            </div>
          </q-scroll-area>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import datauser from 'src/assets/dummy/users'

export default {
  name: 'Dashboard',
  data () {
    return {
      stars: 3,
      images: [
        'https://cdnb.artstation.com/p/assets/images/images/023/969/931/large/yerim-kim-2.jpg?1580904395',
        'https://cdna.artstation.com/p/assets/images/images/023/969/908/large/yerim-kim-20.jpg?1580904367',
        'https://cdna.artstation.com/p/assets/images/images/023/969/920/large/yerim-kim-18.jpg?1580904387'
      ],
      columns: [
        {
          name: 'companyAgent',
          required: true,
          label: 'User',
          align: 'left',
          field: row => row.companyAgent,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: 'companyName',
          required: true,
          label: 'Country',
          align: 'left',
          field: row => row.companyName,
          format: val => `${val}`,
          sortable: true
        }
      ],
      data: datauser
    }
  },
  methods: {
    job (code) {
      let job = code
      switch (code) {
        case 1:
          job = 'CEO'
          break
        case 2:
          job = 'Manager'
          break
        case 3:
          job = 'Designer'
          break
        case 4:
          job = 'Developer'
          break
      }
      return job
    }
  }
}
</script>
