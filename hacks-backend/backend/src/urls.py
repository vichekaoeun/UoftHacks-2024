from django.urls import path
from django.contrib import admin
from rest_framework import routers
# dis shi tweaking, code acc runs w/ no issues
from core import views

router = routers.DefaultRouter()

urlpatterns = router.urls

urlpatterns += [
    path('admin/', admin.site.urls),
    path('note/', views.NoteAPIView.as_view()),
    path('login/', views.login),
    path('logout/', views.logout),
    path('callback/', views.callback),
    path('index/', views.index)
]