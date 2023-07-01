<script>
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import CurrencySelector from './CurrencySelector.vue'

export default {
  name: "HeaderBar",
  data() {
    return {
      currencies: [
        { label: "US Dollar", code: "USD", name: "🇺🇲 $" },
        { label: "Euro", code: "EUR", name: "🇪🇺 €" },
        { label: "British Pound", code: "GBP", name: "🇬🇧 £" },
        // Add more currency options as needed
      ],
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Left',
              icon: 'pi pi-fw pi-align-left'
            },
            {
              label: 'Right',
              icon: 'pi pi-fw pi-align-right'
            },
            {
              label: 'Center',
              icon: 'pi pi-fw pi-align-center'
            },
            {
              label: 'Justify',
              icon: 'pi pi-fw pi-align-justify'
            }
          ]
        },
        {
          label: 'Users',
          icon: 'pi pi-fw pi-user',
          items: [
            {
              label: 'New',
              icon: 'pi pi-fw pi-user-plus'
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-user-minus'
            },
            {
              label: 'Search',
              icon: 'pi pi-fw pi-users',
              items: [
                {
                  label: 'Filter',
                  icon: 'pi pi-fw pi-filter',
                  items: [
                    {
                      label: 'Print',
                      icon: 'pi pi-fw pi-print'
                    }
                  ]
                },
                {
                  icon: 'pi pi-fw pi-bars',
                  label: 'List'
                }
              ]
            }
          ]
        },
        {
          label: 'Events',
          icon: 'pi pi-fw pi-calendar',
          items: [
            {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                {
                  label: 'Save',
                  icon: 'pi pi-fw pi-calendar-plus'
                },
                {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-calendar-minus'
                }
              ]
            },
            {
              label: 'Archieve',
              icon: 'pi pi-fw pi-calendar-times',
              items: [
                {
                  label: 'Remove',
                  icon: 'pi pi-fw pi-calendar-minus'
                }
              ]
            }
          ]
        },
        {
          label: 'Quit',
          icon: 'pi pi-fw pi-power-off'
        }
      ]
    };
  },
  components: {
    Menubar,
    CurrencySelector,
    InputText
  }
};
</script>

<template>
  <div class="card relative z-2">
    <Menubar :model="items">
      <template #start>
        <InputText placeholder="Search" type="text" />
      </template>
      <template #end>
        <CurrencySelector :currencyOptions="currencies" />
      </template>
    </Menubar>
  </div>
</template>