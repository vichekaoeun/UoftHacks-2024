from django.urls import path
from django.contrib import admin
from rest_framework import routers
# dis shi tweaking, code acc runs w/ no issues
from core import views

router = routers.DefaultRouter()

urlpatterns = router.urls

urlpatterns += [
    path('admin/', admin.site.urls, name="admin"),
    path('note/', views.NoteAPIView.as_view(), name="note"),
    path('login/', views.login, name="login"),
    path('logout/', views.logout, name="logout"),
    path('callback/', views.callback, name="callback"),
    path('index/', views.index, name="index")
]