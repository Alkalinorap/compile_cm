# Inherit AOSP device configuration for G300.
$(call inherit-product, device/huawei/u8815/device_u8815.mk)
 
# Inherit some common cyanogenmod stuff.
$(call inherit-product, vendor/cyanogen/products/common.mk)
 
# Include GSM-only stuff
$(call inherit-product, vendor/cyanogen/products/gsm.mk)
 
#
# Setup device specific product configuration.
#
PRODUCT_NAME := cm_u8815
PRODUCT_BRAND := huawei
PRODUCT_DEVICE := u8815
PRODUCT_MODEL := Ascend G300
PRODUCT_MANUFACTURER := Huawei
 
# Release name and versioning
PRODUCT_RELEASE_NAME := U8815
PRODUCT_VERSION_DEVICE_SPECIFIC :=
-include vendor/cyanogen/products/common_versions.mk
