<template>
    <v-dialog 
        v-model="$store.state.settingsDialog"
        max-width="500"
        class="primary"
    >
        <v-card class="primary">
            <v-card-title>
                Settings
            </v-card-title>

            <v-card-text>
                <v-checkbox
                    label="Accessible Parking"
                    v-model="$store.state.accessibleMarkers.accordParking"
                    color="pink"
                >
                </v-checkbox>
                <v-checkbox
                    label="Accessible Ramps"
                    v-model="$store.state.accessibleMarkers.ramps"
                    color="pink"            
                >
                </v-checkbox>
                <v-checkbox
                    label="Lifts"
                    v-model="$store.state.accessibleMarkers.lift"       
                    color="pink"        
                >
                </v-checkbox>
                <v-checkbox
                    label="Universial Access Toilets"
                    v-model="$store.state.accessibleMarkers.toilets"        
                    color="pink"       
                >
                </v-checkbox>
            </v-card-text>
        
            <v-divider></v-divider>

            <v-card-actions>
                <v-btn @click="$store.commit('closeSettingsDialog')" class="pink">Close</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
</template>
