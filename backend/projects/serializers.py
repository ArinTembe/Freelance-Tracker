from rest_framework import serializers
from .models import Project, Milestone

class ProjectSerializer(serializers.ModelSerializer):
    freelancer_name = serializers.CharField(
        source="freelancer.username",
        read_only=True
    )
    status = serializers.CharField(
        read_only=True,
    )
    total_amount = serializers.DecimalField(
    read_only=True,
    max_digits=20,
    decimal_places=2
    )
    paid_amount = serializers.DecimalField(
    read_only=True,
    #source="paid_amount",
    max_digits=20,
    decimal_places=2
    )
    remaining_amount = serializers.DecimalField(
    read_only=True,
    #source="remaining_amount",
    max_digits=20,
    decimal_places=2
    )

    
    
    class Meta:
        model = Project
        fields = "__all__"

class MilestoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestone
        fields = "__all__"