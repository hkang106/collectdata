from django.conf.urls import url
from . import views

app_name = 'data'

urlpatterns = [
    url(
            regex = r'^set/$',
            view = views.setData.as_view(),
            name='set_data'
       ),
]
