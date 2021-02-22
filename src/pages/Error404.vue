<template>
    <div class="row">
      <div class="col-12 bg-dark text-white">
        <div class="column window-height bg-2">
          <div class="col">
            <div class="column full-height justify-center">
              <div class="col-auto text-center">
                <div class="logo-container">
                  <div class="quasar" />
                  <div class="orbit">
                    <div class="strapi" />
                  </div>
                </div>
                <div class="text-h3 q-gutter-y-md q-mb-md">
                  <div>Sorry, nothing here...</div>
                  <div class="text-bold">(404)</div>
                </div>
                <q-btn
                  color="accent"
                  style="width:200px;"
                  to="/"
                  label="Go back"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
