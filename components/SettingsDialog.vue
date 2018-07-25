<template>
    <v-dialog 
        v-model="$store.state.settingsDialog"
        max-width="500"
    >
        <v-card>
            <v-card-title>
                Settings
            </v-card-title>

            <v-card-text>
                <v-switch
                    label="According Parking"
                    v-model="$store.state.accessibleMarkers.accordParking"
                >
                </v-switch>
                <v-switch
                    label="Accessible Ramps"
                    v-model="$store.state.accessibleMarkers.ramps"               
                >
                </v-switch>
                <v-switch
                    label="Lifts"
                    v-model="$store.state.accessibleMarkers.lift"               
                >
                </v-switch>
                <v-switch
                    label="Universial Access Toilets"
                    v-model="$store.state.accessibleMarkers.toilets"               
                >
                </v-switch>
            </v-card-text>
        
            <v-divider></v-divider>

            <v-card-actions>
                <v-btn @click="$store.commit('closeSettingsDialog')">Close</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
</template>
